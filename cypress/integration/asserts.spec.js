///<reference types = "cypress"/>
it('Equality',()=>{
    const a = 1;
    expect(a).equal(1);
    expect(a,'deveria ser 1').equal(1);
    expect(a).to.be.equal(1);
    expect('a').not.to.be.equal('b');
})
it('Truthy', ()=>{
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(a).not.to.be.null;
    expect(c).to.be.undefined;
})

it('Object Equality', ()=>{
    
    const obj = { 
        a:1,
        b:2
    }
    expect(obj).equal(obj)
    expect(obj).equals(obj)
    expect(obj).eq(obj)
    expect(obj).to.be.equal(obj)
    expect(obj).to.be.deep.equal({a:1 , b:2})
    expect(obj).include({a:1})
    expect(obj).to.have.property('b')


})
it('Array', ()=>{
    const arr = [1,2,3];
    expect(arr).to.have.members([1,2,3])
    expect(arr).to.include.members([1,3])
    expect(arr).to.not.be.empty
    expect([]).to.be.empty
    
})
it('Types', ()=>{
    const num = 1
    const str = 'String'
    expect(num).to.be.a('number')
    expect(str).to.be.a('string')
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')
   
})
it('String', ()=>{
    
    const str = 'String de teste'
    
    expect(str).to.be.equal('String de teste')
    expect(str).to.have.length(15)
    expect(str).to.contains('de')
    expect(str).to.match(/de/)
    expect(str).to.match(/String/)
})
it('Numbers', ()=>{
    const num = 4
    const floatNumber = 4.6582
    expect(num).to.be.equal(4)
   
   
})