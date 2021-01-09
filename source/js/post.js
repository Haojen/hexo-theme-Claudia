var $posts = {
    scroller: function () {
        function Scroller() {
            this.callbacks = []
            return this
        }
        Scroller.prototype.bindScrollEvent = function () {
            var _that = this

            window.addEventListener('scroll', $claudia.throttle(function (event) {
                _that.callbacks.forEach(function (func) { func(event) })
            }, 150))
        }

        return Scroller
    },
    showTopic: function (evt, isImmediatelyShow) {
        var CLASS_SHOW = 'is-show'
        var CLASS_NO_ANIMATE = 'is-no-animate'
        var topicEl = document.getElementById('postTopic')
        var postTitle = document.getElementById('postTitle')

        var postTitleCoordinate = postTitle.getBoundingClientRect()
        var threshold = postTitle.offsetTop + postTitleCoordinate.height

        if (window.pageYOffset > threshold) {
            isImmediatelyShow ? topicEl.classList.add(CLASS_NO_ANIMATE) : topicEl.classList.remove(CLASS_NO_ANIMATE)
            return topicEl.classList.add(CLASS_SHOW)
        }

        topicEl.classList.remove(CLASS_SHOW)
    },
    catalogueHighlight: function () {
        var directory = document.querySelectorAll('.toc a')
        if (directory.length === 0) {
            return false
        }

        var tocContainer = document.querySelector('.toc')
        return function () {
            var contentTocList = []
            var activeClassName = 'is-active'

            directory.forEach(function (link) {
                if (!link.href) return
                var id = decodeURI(link.href).split('#')[1]
                contentTocList.push(document.getElementById(id))
            })
            var spacing = 60
            var activeTopicEl = null
            var scrollTop = window.pageYOffset
            for (var i = 0; i < contentTocList.length; i++) {
                var currentTopic = contentTocList[i]

                if (currentTopic.offsetTop > scrollTop + spacing / 2) {
                    // jump to next loop
                    continue
                }

                if (!activeTopicEl) {
                    activeTopicEl = currentTopic
                } else if (currentTopic.offsetTop + spacing >= activeTopicEl.offsetTop - spacing) {
                    activeTopicEl = currentTopic
                }

                var beforeActiveEl = document.querySelector('.toc' + ' .' + activeClassName)
                beforeActiveEl && beforeActiveEl.classList.remove(activeClassName)

                var selectTarget = '.toc a[href="#' + encodeURI(activeTopicEl.id) + '"]'
                var direc = document.querySelector(selectTarget)
                direc.classList.add(activeClassName)

                var tocContainerHeight = tocContainer.getBoundingClientRect().height
                if (direc.offsetTop >= tocContainerHeight - spacing) {
                    tocContainer.scrollTo({
                        // top: direc.offsetTop - spacing,
                        top: direc.offsetTop + 100 - tocContainerHeight,
                    })
                }
                else {
                    tocContainer.scrollTo({ top: 0 })
                }
            }
        }
    },
    mounted: function () {
        hljs && hljs.initHighlighting()

        var Scroller = this.scroller()
        var scrollerInstance = new Scroller()

        var catalogueHighlight = this.catalogueHighlight()
        catalogueHighlight && scrollerInstance.callbacks.push(catalogueHighlight)

        var haveTitle = document.getElementById('postTopic')

        if (haveTitle) {
            this.showTopic(null, true)
            scrollerInstance.callbacks.push(this.showTopic)
        }

        scrollerInstance.bindScrollEvent()

        $claudia.fadeInImage(document.querySelectorAll('.post-content img'))
    }
}

$posts.mounted()
