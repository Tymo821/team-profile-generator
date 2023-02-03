const Intern = require('../lib/Intern');

test('created a Intern object', () => {
    const intern = new Intern('Jenny', '8675309', 'number@onthe.wall', 'Intern');
    intern.school = 'Tommy Tutone University'
    
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.role).toEqual(expect.any(String));
    expect(intern.school).toBe('Tommy Tutone University');
})