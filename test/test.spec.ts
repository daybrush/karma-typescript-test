import Flicking from "@egjs/flicking";
import Axes, {PanInput} from "@egjs/axes";
import Component from "@egjs/component";
import A from "../src/A";
import A2 from "a";

describe("A exnteds B", () => {
  it("class Component", () => {
    expect(Component.name).to.be.equals("Component");
  });
  it("class Axes extends Component", () => {
    expect(Axes.name).to.be.equals("Axes");
    expect(PanInput.name).to.be.equals("PanInput");
  });
  it("class Flicking extends Axes", () => {
    expect(Flicking.name).to.be.equals("Flicking");
  });
  it("class A extends B(typescript)", () => {
    expect(A.name).to.be.equals("A");
    expect(new A().hello()).to.be.equals("Hello from A! Hello from B!");
  });
  it("class A extends B(commonjs)", () => {
    expect(A2.name).to.be.equals("A");
    expect(new (A2 as any)().hello()).to.be.equals("Hello from A! Hello from B!");
  });
});
