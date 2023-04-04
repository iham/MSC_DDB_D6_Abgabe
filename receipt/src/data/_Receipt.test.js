import Receipt from './Receipt';

test('create Receipt', () => {
    let r0 = new Receipt(
        "description",
        new Date(),
        "project",
        100,
        20,
        "comment"
    );

    expect(r0.description).toBe("description");
});
