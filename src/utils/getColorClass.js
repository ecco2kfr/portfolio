const getColorClass = (tech) => {
  switch (tech) {
    case "#Vim":
      return "vim";
    case "#FileZilla":
      return "filezilla";
    case "#JavaScript":
      return "javascript";
    case "#PostgreSQL":
      return "postgresql";
    case "#HTML":
      return "html";
    case "#CSS":
      return "css";
    case "#Git":
      return "git";
    case "#Linux":
      return "linux";
    case "#Python":
      return "python";
    case "#Windows":
      return "windows";
    case "#Bash scripting":
      return "bash";
    case "#SQL":
      return "sql";
    case "#Networking tools":
      return "networking";
    case "#Multiple APIs":
      return "apis";
    case "#C":
      return "c";
    case "#Lua":
      return "lua";
    case "#AdobePhotoshop":
      return "adobe-photoshop";
    case "#React.js":
      return "reactjs";
    case "#PHP":
      return "php";
    case "#VMWare Workstation":
      return "vmware";
    case "#VScode":
      return "vscode";
    default:
      return "";
  }
};

export default getColorClass;
