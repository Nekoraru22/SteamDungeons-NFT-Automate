function one() {
    try {
        document.getElementsByClassName("textoLink")[1].click()
        document.getElementsByClassName("dungeonImage")[0].click()
        document.getElementsByClassName("dungeonImage")[3].click()
        document.getElementsByClassName("actionButtons playAndPause")[0].click()
    } catch {
        if (document.getElementsByClassName("swal2-html-container")[0].innerText == "No tienes energía suficiente") {
            document.getElementsByClassName("swal2-confirm swal2-styled")[0].click()
            document.getElementsByClassName("textoLink")[3].click()
            try {document.getElementsByClassName("mybtn1 link1 btnAñadirCofres radius5")[1].click()} catch {}
            console.log("asasasas")
            setTimeout(get_rewards, 1000)
        }
    }
}

function two() {
    try {
        document.getElementsByClassName("swal2-confirm swal2-styled")[0].click()
    } catch {}
}

function get_rewards() {
    try {
        console.log("asasasas22")
        for (i=0;i<3;i++) {
            document.getElementsByClassName("mybtn1 link1 btnAñadirCofres")[i+1].click()
        }
        document.getElementsByClassName("textoLink")[1].click()
    } catch {document.getElementsByClassName("textoLink")[1].click()}
}

setTimeout(one, 1000)
setTimeout(two, 10000)
setTimeout(two, 20000)

