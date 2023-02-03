const Engineer = require('../lib/Engineer');

test('created a Engineer object', () => {
    const engineer = new Engineer('Jenny', '8675309', 'number@onthe.wall', 'Engineer');
    engineer.github = 'jenny8675309'
    
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.role).toEqual(expect.any(String));
    expect(engineer.github).toBe('jenny8675309');
})