(() => {
  const generate = () => {
    const repo = document.getElementById("repo").value;
    const workflow = document.getElementById("workflow").value;
    if (!repo.split("https://github.com/")[1] || workflow.length === 0) {
      return;
    }
    const [owner, repository] = repo.split("https://github.com/")[1].split("/");
    const preview = `https://github.com/${owner}/${repository}/workflows/${encodeURIComponent(
      workflow
    )}/badge.svg?branch=master`;
    document.getElementById("code").textContent = preview;
  };
  document.getElementById("generate").onclick = generate;

  const reset = () => {
    document.getElementById("my-form").reset();
    document.getElementById("code").textContent = "";
  };
  document.getElementById("clear").onclick = reset;
})();
