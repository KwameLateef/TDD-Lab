describe("ChangeHandler", function() {

    // Constructor tests
    it("initializes with the given amountDue", function() {
    //Arrange
    const changeHandler = new ChangeHandler(5);
    //Act

    //Assert
    expect(changeHandler.amountDue).toBe(5);
    });

    it("initializes cashTendered to 0", function() {
    //Arrange
    const changeHandler = new ChangeHandler(0);
    //Act
    changeHandler.insertCoin();
    //Assert
    expect(changeHandler.cashTendered).toBe(0);
    });

    // Insert coin tests
    //Arrange
    it("insert quarter adds 25", function() {
    const changeHandler = new ChangeHandler(25);
    //Act
    changeHandler.insertCoin("quarter");
    //Assert
    expect(changeHandler.cashTendered).toBe(25);
    });
    
    //Arrange
    it("insert dime adds 10", function() {
    const changeHandler = new ChangeHandler(10);
    //Act
    changeHandler.insertCoin("dime");
    // //Assert
    expect(changeHandler.cashTendered).toBe(10);
    });
    
    //Arrange
    it("insert nickel adds 5", function() {
    const changehandler = new ChangeHandler(5);
    //Act
    changehandler.insertCoin("nickel");
    //Assert
    expect(changehandler.cashTendered).toBe(5);
    });

     //Arrange
    it("insert penny adds 1", function() {
    const changehandler = new ChangeHandler(1); 
    //Act
    changehandler.insertCoin("penny");
    //Assert
    expect(changehandler.cashTendered).toBe(1);   
    });

    //Arrange
    it("subsequent coins continue to add value", function() {
    const changehandler = new ChangeHandler("quarter");
    //Act
    changehandler.insertCoin("quarter");
    //Assert
    expect(changehandler.cashTendered).toBe(50);
    });

    // isPaymentSufficient tests
    it("isPaymentSufficient returns true when enough cashTendered", function() {
        
    });

    it("isPaymentSufficient returns false when not enough cashTendered", function() {
        
    });
    
    it("isPaymentSufficient returns true when exact cashTendered", function() {
        
    });

    // Give change tests
    it("giveChange returns no coins when exact change", function() {
        
    });

    it("giveChange returns correct coins for 10", function() {
        
    });

    it("giveChange returns correct coins for 27", function() {
        
    });

    it("giveChange returns correct coins for 68", function() {
        
    });

    it("giveChange returns correct coins for 15", function() {
        
    });

    it("giveChange returns correct coins for 2", function() {
        
    });

});