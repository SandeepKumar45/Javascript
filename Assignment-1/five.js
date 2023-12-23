let typeOfPackage = "express";

switch (typeOfPackage) {
  case "standard":
    console.log("Delivered in 3-5 days");
    break;

  case "express":
    console.log("Delivered in 1-2 days");
    break;

  case "overnight":
    console.log("Delivered Tomorrow");
    break;

  default:
    console.log("Invalid type of package");
}
