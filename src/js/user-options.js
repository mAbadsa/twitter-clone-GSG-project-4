const showUserOption = () => {
  const $userOptionListBox = document.querySelector(".user-option_list-box");
  const $userOptionLogoutBox = document.querySelector(
    ".user-option_logout-box"
  );

  const $hedaerContainerUser = document.querySelector(
    ".hedaer-container__user"
  );

  $hedaerContainerUser.addEventListener("click", () => {
    if ($userOptionListBox.classList.value.includes("d-block")) {
      $userOptionListBox.classList.remove("d-block");
    } else {
      $userOptionListBox.classList.add("d-block");
    }
  });

  if ($userOptionListBox.classList.value.includes("d-block")) {
    $userOptionLogoutBox.addEventListener("click", () => {
      $userOptionListBox.classList.remove("d-block");
    });
  }
};

export default showUserOption;
