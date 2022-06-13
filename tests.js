// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("foo", function() {
    let expectedResult = 2;
    it('should return true if foo() = 2', function () {
        expect(foo()).toBe(2);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string', function() {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return "Hello, Jane!"', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!")
    })
    it('should return "Hello, Alex!"', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!")
    })
    it('should return "Hello, Pat!"', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    })
    it('should return "Hello, World!" when passed undefined', function() {
        expect(sayHello()).toBe("Hello, World!")
    })
    it('should return "Hello, World!" when passed true', function() {
        expect(sayHello(true)).toBe("Hello, World!")
    })
    it('should return "Hello, World!" when passed false', function() {
        expect(sayHello(false)).toBe("Hello, World!")
    })
    it('should return "Hello, World!" when passed a numerical string', function() {
        expect(sayHello("22")).toBe("Hello, World!")
    })
    it('should return "Hello, World!" when passed a number', function() {
        expect(sayHello(22)).toBe("Hello, World!")
    })
});
describe('isFive', function () {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe("function")
    })
    it('should return true when passed passed 5', function () {
        expect(isFive(5)).toBe(true)
    });
    it('should return true when passed numerical string 5', function () {
        expect(isFive("5")).toBe(true)
    });
    it('should return false when passed 4', function () {
        expect(isFive(4)).toBe(false)
    });
})