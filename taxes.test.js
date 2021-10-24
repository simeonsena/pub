
describe('calculate tests', function (){
  it('should calculate the high tax braket', function(){
expect(calculateTaxes(50000)).toEqual(12500);
expect(calculateTaxes(100000)).toEqual(25000);

})
it('should calculate the low tax braket', function(){
    expect(calculateTaxes(10000)).toEqual(1500);
    expect(calculateTaxes(1000)).toEqual(150);
    expect(calculateTaxes(0)).toEqual(0);
})
it('should calculate reject invailid', function(){
expect(() =>calculateTaxes('lkjlj')).toThrowError();
expect(() =>calculateTaxes([])).toThrowError();
})
it ('should remove duplicaes for array', function() {
    expect(rem([1,1,2,2,3,4])).toEqual([1,2,3,4])
    expect(rem([1,2,3,4])).toEqual([1,2,3,4])
    expect(rem([1,2,3,4])).toBeInstanceOf(Array)

})  
})

describe('removedupes tests', function(){
    it ('should remove duplicaes for string', function() {
    expect(rem('hello')).toEqual('helo')
    expect(rem('hello')).toBeInstanceOf(String)
    
})

it('should remove value from arra', function(){
    expect(remove([1,2,3,4,5,6], 6)).not.toContain(6)
})
})

describe('submitForm() tests', () => {
    it('saves input val to usernames array', () =>{
        input.value = 'fuck';
        submitForm();
        expect(usernames.length).toBe(1)
        expect(usernames).toContain('fuck')
    })
    it('saves really long usernames', ()=>{
        input.value ='i am a really annoyingly long useername';
        submitForm();
        expect(usernames.length).toBe(1);
    })
})
afterEach(function(){
    input.value ='';
    usernames =[];
  })
  beforeEach(() => {
      console.log("before")
  })
  beforeAll(() => {
    console.log("before all")
})
afterAll(() => {
    console.log("after all")
})