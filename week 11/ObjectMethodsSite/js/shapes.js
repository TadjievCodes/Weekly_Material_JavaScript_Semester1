function Rectangle(w, l)
{
    this.width = w;
    this.length = l;

    // Method
    this.area = function () {
        return this.width * this.length;
    }

    this.toString = function () {
        return "This rectangle has a width of: " + this.width + " and a length of: " + this.length + ". Resulting in an area of: " + this.area();
    }
}

function Triangle(b, h)
{
    this.base = b;
    this.height = h;

    // Method 
    this.area = function () {
        return (this.base * this.height) / 2;
    }

    this.toString = function () {
        return "This triangle has a base of: " + this.base + " and a height of: " + this.height + ". Resulting in an area of: " + this.area();
    }
}

function Circle(r)
{
    this.radius = r;
    this.diameter = r * 2;

    // Methods
    this.area = function () {
        return Math.PI * Math.pow(this.radius, 2);
    }

    this.toString = function () {
        return "This circle has a radius of: " + this.radius + " and a diameter of: " + this.diameter + ". Resulting in an area of: " + this.area();
    }
}
