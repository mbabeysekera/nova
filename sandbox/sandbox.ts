import { defineSandbox } from "eve/sandbox";
import { justbash } from "eve/sandbox/just-bash"; 
import { microsandbox } from "eve/sandbox/microsandbox";

export default defineSandbox({
//   backend: justbash(), // or microsandbox()
    backend:  microsandbox()
});