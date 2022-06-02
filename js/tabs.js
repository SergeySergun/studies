document.addEventListener('DOMContentLoaded', function(){
 document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(event){
        const path = event.currentTarget.dataset.path
        console.log(path)

        document.querySelectorAll('.tab_content').forEach(function(tabContent){
            tabContent.classList.remove('tab_content__active')
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('tab_content__active')
    })
 })
})