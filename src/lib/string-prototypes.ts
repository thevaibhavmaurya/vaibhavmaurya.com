String.prototype.capitalizeFirstLetter = function () {
  if (!this) return this;
  return this.charAt(0).toUpperCase() + this.slice(1);
};
