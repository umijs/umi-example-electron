export function destoryGlobalSpinner() {
  const spinner = document.querySelector('.spinner');
  if (spinner && spinner.parentNode) {
    spinner.parentNode.removeChild(spinner);
  }
}
