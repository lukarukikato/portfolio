// Plan for javascript is turn the website to dark mode

const observer = new IntersectionObserver((entries) =>
{
    entries.forEach((entry) =>
    {
        console.log(entry)
        if (entry.isIntersecting)
        {
            entry.target.classList.add('show');
        } else
        {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach((el) => observer.observe(el));