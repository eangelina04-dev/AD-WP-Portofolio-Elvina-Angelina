package com.portofolio.portofolio.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.portofolio.portofolio.Models.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
}