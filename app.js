(() => {
  const generate = async (event) => {
    const repo = document.getElementById("repo").value;
    const workflow = document.getElementById("workflow").value;
    if (!repo.split("https://github.com/")[1] || workflow.length === 0) {
      return;
    }
    // https://github.com/goceevo/quality-assurance
    // E2E in custom container
    // https://github.com/goceevo/quality-assurance/workflows/E2E%20in%20custom%20container/badge.svg?branch=develop
    const [owner, repository] = repo.split("https://github.com/")[1].split("/");
    const preview = `https://github.com/${owner}/${repository}/workflows/${encodeURIComponent(
      workflow
    )}/badge.svg?branch=master`;
    document.getElementById("code").textContent = preview;
    console.log(preview);
  };
  document.getElementById("generate").onclick = generate;
})();
