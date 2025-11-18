import sortHeroesByHealth from '../sortHeroesByHealth.js';

test('testing function sort heroes by health', () => {
    const input = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ];
    const expected = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
    ];

    expect(sortHeroesByHealth(input)).toEqual(expected);
});