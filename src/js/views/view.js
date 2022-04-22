export default class View {
  // #parentElement = document.querySelector("body");
  #data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this.setData(data);

    const markup = this.getMarkup();

    this.clear();
    this.getParentElement().insertAdjacentHTML("afterbegin", markup);
  }

  update(data) {
    this.setData(data);
    const newMarkup = this.getMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll("*"));
    const curElements = Array.from(
      this.getParentElement().querySelectorAll("*")
    );

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      // console.log(curEl, newEl.isEqualNode(curEl));

      // Updates changed TEXT
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ""
      ) {
        // console.log('💥', newEl.firstChild.nodeValue.trim());
        curEl.textContent = newEl.textContent;
      }

      // Updates changed ATTRIBUES
      if (!newEl.isEqualNode(curEl))
        Array.from(newEl.attributes).forEach((attr) =>
          curEl.setAttribute(attr.name, attr.value)
        );
    });
  }

  clear() {
    this.getParentElement().innerHTML = "";
  }

  renderSpinner() {}

  renderError(message = this.getErrorMessage()) {
    const markup = `<p>${message}</p>`;

    this.clear();
    this.getParentElement().insertAdjacentHTML("afterbegin", markup);
  }

  renderMessage(message = this.getMessage()) {
    const markup = `
      <p>${message}</p>
    `;
    this.getMessageDiv().innerHTML = markup;
    this.getMessageDiv().classList.toggle("hidden");
    setTimeout(() => {
      this.getMessageDiv().classList.toggle("hidden");
    }, 3000);
  }

  setData(data) {
    this.#data = data;
  }

  getData() {
    return this.#data;
  }
}
