import { stories } from "../stories";

test("all options have a destination", () => {
  const options = Object.values(stories).flatMap((s) => s.options);
  const optionsWithoutDestination = options.filter(
    (o) => Object.keys(o).findIndex((k) => k === "to") === -1
  );
  expect(optionsWithoutDestination.length).toEqual(0);
});

function dfsOptions() {
  const visited = new Set();

  const dfs = (previousIndex, previousRole, currentIndex) => {
    if (currentIndex === 56) {
      return;
    }
    const currentStory = stories[currentIndex];
    if (currentStory == null) {
      throw new Error(`Unknown index: ${currentIndex}`);
    }

    const newRole = currentStory.role;
    if (previousRole !== "NONE" && previousRole !== newRole) {
      throw new Error(
        `Invalid role for story ${previousIndex} -> ${currentIndex}`
      );
    }

    const options = currentStory.options;
    options.forEach((option) => {
      const { to } = option;
      if (to == null) {
        throw new Error(`Invalid option for story ${currentIndex}: ${option}`);
      }

      const key = `${currentIndex}-${option.to}`;
      if (visited.has(key)) {
        return;
      }
      visited.add(key);
      dfs(currentIndex, newRole, option.to);
    });
  };

  dfs(0, "NONE", 0);
}

test("the story, roles and options are coherent", () => {
  dfsOptions();
  expect(true).toBeTruthy();
});
