package com.portofolio.portofolio.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.portofolio.portofolio.Models.Project;
import com.portofolio.portofolio.Repository.ProjectRepository;

@Controller
public class ProjectController {

    @Autowired
    private ProjectRepository projectRepository;
    
    @GetMapping("/projects")
    public String tampilkanProjects(Model model) {
        model.addAttribute("daftarProject", projectRepository.findAll());
        model.addAttribute("projectBaru", new Project()); 
        return "HTML/projects"; // Mencari file di templates/HTML/projects.html
    }

    @PostMapping("/projects/add")
    public String simpanProject(@ModelAttribute("projectBaru") Project project) {
        projectRepository.save(project);
        return "redirect:/projects"; 
    }

    @GetMapping("/projects/edit/{id}")
    public String tampilkanFormEdit(@PathVariable Long id, Model model) {
        // Cari project di database berdasarkan ID
        Project projectLama = projectRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("Project tidak ditemukan dengan ID: " + id));
        
        model.addAttribute("project", projectLama); 
        return "HTML/edit_project"; 
    }

    @PostMapping("/projects/edit/{id}")
    public String updateProject(@PathVariable Long id, @ModelAttribute("project") Project project) {
        // Wajib set ID agar Spring Boot tahu ini data lama yang mau ditimpa (di-update)
        project.setId(id);
        projectRepository.save(project);
        
        return "redirect:/projects"; // Kembali ke halaman projects
    }

    @GetMapping({"/", "/index", "/index.html"})
    public String tampilkanHome() {
        return "HTML/index"; // Mencari file templates/HTML/index.html
    }

    @GetMapping({"/about", "/about.html"})
    public String tampilkanAbout() {
        return "HTML/about";
    }

    @GetMapping({"/skills", "/skills.html"})
    public String tampilkanSkills() {
        return "HTML/skills";
    }

    @GetMapping({"/gallery", "/gallery.html"})
    public String tampilkanGallery() {
        return "HTML/gallery";
    }

    @GetMapping({"/contact", "/contact.html"})
    public String tampilkanContact() {
        return "HTML/contact";
    }
}