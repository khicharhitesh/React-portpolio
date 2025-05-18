const skills = [
  { name: "C", logo: "https://imgs.search.brave.com/oNQcGvf1oES6m2amIIGLSuBWAz0yhyJu2sHMYS8WQO4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90b3Bw/bmcuY29tL3VwbG9h/ZHMvcHJldmlldy9j/LXByb2dyYW1taW5n/LWljb24tYy1wcm9n/cmFtbWluZy1sYW5n/dWFnZS1sb2dvLTEx/NTYyOTQ1Njc5ZHVh/eHRuM3lxMC5wbmc" },
  { name: "C++", logo: "https://imgs.search.brave.com/bwxfFvbXbAuEJbNlE8miIX-iAwzjhb6S7t2a5wn8jLE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2lz/b2NwcC9sb2dvcy9t/YXN0ZXIvY3BwX2xv/Z28ucG5n" },
  { name: "HTML", logo: "https://imgs.search.brave.com/zvjJ5doqGwuNTGlHWNvIUQZBIibVG4MhslyXHuV5ZT4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ3ZjViZGNlZjEw/MTRjMGI1ZTQ4OWMu/cG5n" },
  { name: "CSS", logo: "https://imgs.search.brave.com/bs9CWrd-2EeTu71zOGIwaSwFEnQdxUHyFL3hi2gser0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MmIyMjFlZjAzOGFh/ZDRkM2VkN2NhMmUu/cG5n" },
  { name: "JavaScript", logo: "https://imgs.search.brave.com/4ODLwWYy7h8EEQzjOzTrpzFiWpNynz27SB73upo1Fag/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDI3LzEy/Ny80NjMvbm9uXzJ4/L2phdmFzY3JpcHQt/bG9nby1qYXZhc2Ny/aXB0LWljb24tdHJh/bnNwYXJlbnQtZnJl/ZS1wbmcucG5n" },
  { name: "React", logo: "https://imgs.search.brave.com/-wRYfmc8MFTE9dYoFBioZSxfu45QaJyuKfJ3h68gZGM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtMy82/MDAvUmVhY3QuanNf/bG9nby01MTIucG5n" },
  { name: "Tailwind CSS", logo: "https://imgs.search.brave.com/hGnGOpzRCMB3ypxZIG0ba0Uw6tHkJNfPy9oeCf51r1g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC90YWlsd2lu/ZC1jc3MtaWNvbi0y/MDQ4eDEyMjktdThk/enQ0dWgucG5n" },
  { name: "Bootstrap", logo: "https://imgs.search.brave.com/OX6ppihvwQhsHZhtwRh2p7Mu72GaMXB6i5PWJP8x2nQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy9ib290c3RyYXAt/bG9nby5wbmc" },
  { name: "Git & GitHub", logo: "https://imgs.search.brave.com/ZZVkPN-_cIr6ZXIsJ1d4-RndUMqDkIMUu_gRiPCf69I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naXRo/dWIuZ2l0aHViYXNz/ZXRzLmNvbS9hc3Nl/dHMvR2l0SHViLU1h/cmstZWEyOTcxY2Vl/Nzk5LnBuZw" },
  { name: "Node.js", logo: "https://imgs.search.brave.com/e3yWh4TVcjn6GMutCtvGxGe6za59J5oZzVQaH2YzmN8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzUwLzEvbm9kZS1q/cy1sb2dvLXBuZ19z/ZWVrbG9nby01MDEy/MzYucG5n" },
  { name: "Express.js", logo: "https://imgs.search.brave.com/mp7pxPDfAmEVCNQCODKAu28i3Xargk3TJvJCN0Lu0mM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9raW5z/dGEuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzA0L2V4/cHJlc3MtMS5wbmc" },
  { name: "Postman", logo: "https://imgs.search.brave.com/RPEPJUb4IIh6Ytl8mg0KrGvC0JxA_AmkKdSisGSAMDw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MmNjMWIzYTE1MGQ1/ZGU5YTNkYWQ1Zjcu/cG5n" },
  { name: "VS Code", logo: "https://imgs.search.brave.com/oQDgpm8Dje9aowjkeRCoBBFZCx64xhHivZF6pUgRZ6c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91c2Vy/LWltYWdlcy5naXRo/dWJ1c2VyY29udGVu/dC5jb20vNjc0NjIx/LzcxMTg3ODAxLTE0/ZTYwYTgwLTIyODAt/MTFlYS05NGM5LWU1/NjU3NmY3NmJhZi5w/bmc" },
  { name: "MongoDB", logo: "https://imgs.search.brave.com/sP5Qwk0VzQxr6ido4czY-uuR_9Bcsqt1hBSYSJronVo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvTW9u/Z29kYi1QTkctUGlj/dHVyZS5wbmc" },
  { name: "Firebase", logo: "https://imgs.search.brave.com/a_rPZiE5iJ8cO02gt_CXght_zvhSXtj5p2pCh8xqFrY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maXJl/YmFzZS5nb29nbGUu/Y29tL3N0YXRpYy9p/bWFnZXMvYnJhbmQt/Z3VpZGVsaW5lcy9s/b2dvLXZlcnRpY2Fs/LnBuZw" },
  { name: "Cloudinary", logo: "https://imgs.search.brave.com/qNgLouxHOtQeaHHpR0DdhFEOFYSowliBstw-Z6NMm3U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kZXYt/dG8tdXBsb2Fkcy5z/My5hbWF6b25hd3Mu/Y29tL3VwbG9hZHMv/YXJ0aWNsZXMvenZs/ZXZsNW95ZnRhY2xv/emQzcTYucG5n" },
  {name:"REST API",logo:""}
];

export default function Skills() {
  return (
    <section className="min-h-screen bg-white text-black px-6 py-16">
      <div className="max-w-6xl mx-auto text-center m-[40px]">
        <h2 className="text-4xl font-bold text-lime-500 mb-10">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key=""
              className="bg-white border border-lime-500 rounded-lg p-4 flex flex-col items-center shadow-lg hover:shadow-xl transition"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-12 h-12 mb-3 object-contain"
              />
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
