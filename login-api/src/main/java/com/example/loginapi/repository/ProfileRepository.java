package com.example.loginapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.loginapi.model.Profile;

@Repository
public interface ProfileRepository extends JpaRepository<Profile, Integer>{

}
