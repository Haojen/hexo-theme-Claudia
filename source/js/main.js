window.$claudia = {
    imgAddLoadedEvent: function () {
        var images = document.querySelectorAll('.js-progressive-loading')

        // TODO: type is image ?
        // TODO: read data-backdrop
        function loaded(event) {
            var image = event.currentTarget
            var parent = image.parentElement

            var parentWidth = Math.round(parent.getBoundingClientRect().width)
            var childImgWidth = Math.round(image.getBoundingClientRect().width)

            image.style.opacity = 1

            var isCovered = parentWidth === childImgWidth
            var blurImg = parent.previousElementSibling
            if (isCovered) {
                blurImg.classList.add('is-hidden')
                return
            }
            blurImg.classList.remove('is-hidden')
        }

        function eachImage(noNeedLoadEvt) {
            images.forEach(function (img) {
                if (img.complete) {
                    loaded({ currentTarget: img })
                    return
                }

                if (noNeedLoadEvt) return
                img.addEventListener('load', loaded)
            })
        }

        // 截流
        function throttle(func, time) {
            var wait = false
            return function () {
                if (wait) return
                wait = true
                setTimeout(function () {
                    func()
                    wait = false
                }, time)
            }
        }

        window.addEventListener('resize', throttle(function () { eachImage(true) }, 100))

        eachImage()
    }
}

document.addEventListener('DOMContentLoaded', function () {
    $claudia.imgAddLoadedEvent()
})
