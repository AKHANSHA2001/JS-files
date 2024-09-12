const button = document.querySelector("button");
button.addEventListener("click", () => {
    Notification.requestPermission().then(perm => {
        var notification = new Notification("Hello", {
            body: "This is a notification !!!",
            icon: "https://example.com/icon.png",
            // tag: "hello",
            data: {hello: 'world'},
            });
            notification.addEventListener("error", e =>{
                alert("ERROR!!!!!!!!!!");
            })

        if (perm === "granted") {
           
        }
    })
})

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        const leaveDate = new Date()
        // do something when the page is visible
        interval = setInterval(() => {
             notify = new Notification("Come back !!!", {
                body: `You left the page for ${Math.round(new Date() - leaveDate)/1000} seconds !!!`,
                tag: "Come back"
            })
        }, 100)
            
        } else{
        //     new Notification("Thank you for coming back", {
        //         body: "You came back to the page !!!",
        //         tag: "Came back"
        // })
        if(interval) clearInterval(interval)
        if (notify)notify.close()

    }
})