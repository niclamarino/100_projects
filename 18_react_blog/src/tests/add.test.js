/* .toBe */
const add = (a, b) => a + b;
test("should add two numbers", () => {
	const result = add(3, 4);
	expect(result).toBe(7);
});

/* generateGreeting */
const generateGreeting = name => `Hello ${name}`;
test("should be a name", () => {
	const result = generateGreeting("Mike");
	expect(result).toBe("Hello Mike");
});

/* toContain */
const arr = ["Apples", "Pears", "Melons"];
test("should contain apples", () => {
	expect(arr).toContain("Apples");
});
