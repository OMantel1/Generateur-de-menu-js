import { expect } from "@jest/globals";
import { displayNewList, shuffleArray, sendMsgError } from "./menus";
import json from "../menus.json";

beforeAll(() => {
  document.body.innerHTML = `
  <main>
  <header>
      <h1 class="title">GENERATEUR DE MENUS</h1>
  </header>

  <button id="bouton"></i>CREER MES MENUS</button>

  <section id="menu">
      <p></p>
      <ul id="menu-liste">
      </ul>
  </section>

  <div class="msgError msgHidden"></div>

</main>`;
});

const array = [1, 2, 3, 4, 5, 6, 7];
const newArray = [1, 2, 3, 4, 5, 6, 7];
shuffleArray(newArray);
it("should return a shuffle array", () => {
  expect(newArray).not.toEqual(array);
  expect(newArray.length).toEqual(array.length);
});

it("should return message error", () => {
  const error = "error msg";
  sendMsgError(error);
  expect(document.querySelector(".msgError").textContent).toEqual("error msg");
});

it("should return menus", () => {
  let cheatMealList = shuffleArray(json.filter((x) => x.cheatMeal === true));
  let pastaList = shuffleArray(json.filter((x) => x.sideDish === "pasta"));
  let vegetablesList = shuffleArray(
    json.filter((x) => x.sideDish === "vegetables")
  );
  let potatoesList = shuffleArray(
    json.filter((x) => x.sideDish === "potatoes" && x.cheatMeal === false)
  );
  let othersideDishList = shuffleArray(
    json.filter(
      (x) =>
        x.sideDish !== "potatoes" &&
        x.sideDish !== "pasta" &&
        x.sideDish !== "vegetables" &&
        x.cheatMeal === false
    )
  );
  displayNewList(
    pastaList,
    vegetablesList,
    potatoesList,
    cheatMealList,
    othersideDishList
  );
  expect(document.querySelectorAll("li")).not.toBe(null)
  expect(document.querySelectorAll("li").length).toEqual(7);
});
