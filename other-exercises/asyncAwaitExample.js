function getData() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            reject("Something went wrong!")
        }, 1)
    })
}

// Example of try/catch with async/await

async function start() {
    try {
        const result = await getData();
    } catch (error) {
        console.log(`ERROR: ${error}`);
    }
}

