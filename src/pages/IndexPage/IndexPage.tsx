// @ts-nocheck
import { For, Show, type Component } from "solid-js";
import { Dynamic } from "solid-js/web";

import { Link } from "@/components/Link/Link.js";
import { Page } from "@/components/Page/Page.js";
import { routes } from "@/navigation/routes.js";

import useRedux from "@/components/TodoList/useRedux.jsx";
import reduxStore from "@/components/TodoList/store.jsx";
import actions from "@/components/TodoList/Actions.jsx";

import "./IndexPage.css";

export const IndexPage: Component = () => {
  const [store, { addTodo, toggleTodo }] = useRedux(reduxStore, actions);
  let input;

  return (
    <Page title="shayan shayan shayan" back={false}>
      <p>سلام من مادرم رو دوست دارم</p>
      <div>
        <div>
          <input ref={input} />
          <button
            onClick={(e) => {
              if (!input.value.trim()) return;
              addTodo(input.value);
              input.value = "";
            }}
          >
            Add Todo
          </button>
        </div>
        <For each={store.todos}>
          {(todo) => {
            const { id, text } = todo;
            console.log("Create", text);
            return (
              <div>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onchange={[toggleTodo, id]}
                />
                <span
                  style={{
                    "text-decoration": todo.completed ? "line-through" : "none",
                  }}
                >
                  {text}
                </span>
              </div>
            );
          }}
        </For>
      </div>

      <ul class="index-page__links">
        <For each={routes}>
          {(route) => (
            <Show when={route.title}>
              <li class="index-page__link-item">
                <Link class="index-page__link" href={route.path}>
                  <Show when={route.Icon}>
                    {(Icon) => (
                      <i class="index-page__link-icon">
                        <Dynamic component={Icon()} />
                      </i>
                    )}
                  </Show>
                  {route.title}
                </Link>
              </li>
            </Show>
          )}
        </For>
      </ul>
    </Page>
  );
};
