import { defineSandbox } from "eve/sandbox";
import { justbash } from "eve/sandbox/just-bash"; 
import { microsandbox } from "eve/sandbox/microsandbox";

export default defineSandbox({
//   backend: justbash(), // or microsandbox()
    backend:  microsandbox(),
    async bootstrap({use}) {
        const sandbox = await use();
        await sandbox.run({
            command: [
                "apt-get update",
                "apt-get install -y python3-pip python3",
                "python3 --version"
            ].join(" && ")
        });
    },
});