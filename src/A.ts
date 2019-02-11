import B from "./B";

export default class A extends B {
    public hello() {
        return `Hello from A! ${super.hello()}`;
    }
}
