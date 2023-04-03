import * as faker from "faker";

const mount = (el) => {
  let html = "";
  for (let index = 0; index < 5; index++) {
    html += `<li>${faker.commerce.product()}</li>`;
  }

  el.innerHTML = html;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");
  if (el) {
    mount(el);
  }
}

export { mount };
