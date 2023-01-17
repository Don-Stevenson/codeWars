const { doPointsOverlap } = require("../overlappinArrays.js")

const assert = require("assert")

describe("test doPointsOverlap", () => {
    it("[0,0,0,0] should return true", () =>
        assert.deepStrictEqual(doPointsOverlap([0, 0, 0, 0]), true)
    )
    it("[1, 1, 3, 4] should return false", () =>
        assert.deepStrictEqual(doPointsOverlap([1, 1, 3, 4]), false)
    )
    it("[1, 2, 2, 6] should return true", () =>
        assert.deepStrictEqual(doPointsOverlap([1, 2, 2, 6]), true)
    )
    it("[2, 5, 3, 6] should return true", () =>
        assert.deepStrictEqual(doPointsOverlap([2, 5, 3, 6]), true)
    )
    it("[2, 4, 55, 68] should return false", () =>
        assert.deepStrictEqual(doPointsOverlap([2, 4, 55, 68]), false)
    )
    it("[19, 24, 10, 19] should return true", () =>
        assert.deepStrictEqual(doPointsOverlap([19, 24, 10, 19]), true)
    )
    it("[2, 20, 1, 100] should return true", () =>
        assert.deepStrictEqual(doPointsOverlap([2, 20, 1, 100]), true)
    )
    it("[NaN, 20, 1, 100] should return false", () =>
        assert.deepStrictEqual(doPointsOverlap([NaN, 20, 1, 100]), false)
    )
    it("['a', 20, 1, 100] should return false", () =>
        assert.deepStrictEqual(doPointsOverlap(['a', 20, 1, 100]), false)
    )
    it("[undefined, 20, 1, 100] should return false", () =>
        assert.deepStrictEqual(doPointsOverlap([undefined, 20, 1, 100]), false)
    )
    it("** because of 0 and false being equal to false, I guess** [false, 20, 1, 100] should return true", () =>
        assert.deepStrictEqual(doPointsOverlap([false, 20, 1, 100]), true)
    )
    it("** because of true and a number being equal to true, I guess** [true, 20, 1, 100] should return true", () =>
        assert.deepStrictEqual(doPointsOverlap([true, 20, 1, 100]), true)
    )
    it("** because of true and a number being equal to true, I guess** [true, true, true, true] should return true", () =>
        assert.deepStrictEqual(doPointsOverlap([true, true, true, true]), true)
    )
    it("** because of false and 0 being equal to false, I guess** [false, false, false, false] should return true", () =>
        assert.deepStrictEqual(doPointsOverlap([false, false, false, false]), true)
    )
    it("** because of null and 0 being equal to false, I guess** [null, false, false, false] should return true", () =>
        assert.deepStrictEqual(doPointsOverlap([null, false, false, false]), true)
    )
    it("[1, big int , 10, 29] should return true", () =>
        assert.deepStrictEqual(doPointsOverlap([1, 19283838888888, 10, 29]), true)
    )
    it("[1, big int , 10, 29] should return true", () =>
        assert.deepStrictEqual(doPointsOverlap([1, 19283838888888999999999999999999999999, 10, 29]), true)
    )
    it("[-1, -2, 10, 29] should return false", () =>
        assert.deepStrictEqual(doPointsOverlap([-1, -2, 10, 29]), false)
    )
    it("[-1, -2, -10, 0] should return true", () =>
        assert.deepStrictEqual(doPointsOverlap([-1, -2, -10, 0]), true)
    )
    it("[-1, -2, -100, -59] should return false", () =>
        assert.deepStrictEqual(doPointsOverlap([-1, -2, -100, -59]), false)
    )
    it("[NaN, false, null, undefined] should return false", () =>
        assert.deepStrictEqual(doPointsOverlap([NaN, false, null, undefined]), false)
    )
    it("[{}, true, {}, true] should return true", () =>
        assert.deepStrictEqual(doPointsOverlap([{}, true, {}, true]), true)
    )
    it("[{}, {}, true, true] should return false", () =>
        assert.deepStrictEqual(doPointsOverlap([{}, {}, true, true]), false)
    )
    it("[{}, {}, {}, {}] should return true", () =>
        assert.deepStrictEqual(doPointsOverlap([{}, {}, {}, {}]), true)
    )
    it("[true, true, true, true] should return true", () =>
        assert.deepStrictEqual(doPointsOverlap([true, true, true, true]), true)
    )
})

