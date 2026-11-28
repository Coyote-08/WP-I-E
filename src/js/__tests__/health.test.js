import getHealthStatus from '../health.js';

test('Health Status 100', () => {
    expect(getHealthStatus({name:'Олег' , health: 100})).toBe('healthy');
});

test('Health Status 40', () => {
    expect(getHealthStatus({name:'Игорь' , health: 40})).toBe('wounded');
});

test('Health Status 10', () => {
    expect(getHealthStatus({name:'Ваня', health: 10})).toBe('critical');
});

test('Health Status 50', () => {
    expect(getHealthStatus({name:'Ваня', health: 50})).toBe('wounded');
});

test('Health Status 15', () => {
    expect(getHealthStatus({name:'Ваня', health: 15})).toBe('wounded');
});

test('Health Status 51', () => {
    expect(getHealthStatus({name:'Ваня', health: 51})).toBe('healthy');
});

test('Health Status 14', () => {
    expect(getHealthStatus({name:'Ваня', health: 14})).toBe('critical');
});