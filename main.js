function one() {
    try {
        document.getElementsByClassName("col-sm-12 col-md-6 col-lg-4 dungeon")[0].click()
        document.getElementsByClassName("col-sm-12 col-md-6 col-lg-4 dungeon")[3].click()
        document.getElementsByClassName("actionButtons playAndPause")[0].click()
        document.getElementsByClassName("swal2-confirm swal2-styled")[0].click()
    } catch {
        if (document.getElementsByClassName("swal2-html-container")[0].innerText == "No tienes energía suficiente") {
            document.getElementsByClassName("swal2-confirm swal2-styled")[0].click()
            document.getElementsByClassName("nav-link notification")[1].click()
            try {
                document.getElementsByClassName("mybtn1 link1 btnAñadirCofres radius5")[0].click()
            } catch {}
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
        for (i=0;i<3;i++) {
            document.getElementsByClassName("mybtn1 link1 btnAñadirCofres")[i].click()
        }
    } catch {}
    document.getElementsByClassName("nav-link")[4].click()
}

setTimeout(one, 1000)
setTimeout(two, 10000) // For autoskip the battle
