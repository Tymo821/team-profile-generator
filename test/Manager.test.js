const Manager = require('../lib/Manager');

test('created a Manager object', () => {
    const manager = new Manager('Jenny', '8675309', 'number@onthe.wall', 'Manager');
    manager.officeNum = '867-5309'
    
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.role).toEqual(expect.any(String));
    expect(manager.officeNum).toBe('867-5309');
})