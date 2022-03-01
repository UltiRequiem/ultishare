import { render, wrapElements, createElement } from "kumeru";

const app = wrapElements(createElement("p", "Hello World!"));

render("app", app);
