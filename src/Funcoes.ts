    // FUNÇOÊS
    function addNumber(x: number, y: number): number{
        return x + y;
    }
    let soma: number = addNumber(5, 5);
    
    // pedir dois tipos de valores
    function CallToPhone(phone: number | string): number | string{
        return phone;
    }
    console.log(CallToPhone(11959225709));


    // ASYNC
    async function getDatabase(id: number): Promise< number | string> {
        return "Joao";
    }