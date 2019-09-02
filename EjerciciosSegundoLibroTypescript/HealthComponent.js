var HealthComponent = function (initialHealth) {
    this.health = initialHealth;
    this.getHit = function (amount) {
        this.health -= amount;
    }
    return this;
}
module.exports = HealthComponent;