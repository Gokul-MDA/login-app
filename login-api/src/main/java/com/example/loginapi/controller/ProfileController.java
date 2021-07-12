package com.example.loginapi.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.loginapi.model.Profile;
import com.example.loginapi.repository.ProfileRepository;

@RestController 
@CrossOrigin(origins = "http://localhost:4200")
public class ProfileController {
	
	@Autowired
	private ProfileRepository profileRepository;
	
	@GetMapping("/profile")
	public List<Profile> getAllProfile() {
		return profileRepository.findAll();
	}
	
	@GetMapping("/profile/{id}")
	public ResponseEntity<Profile> getProfileById(@PathVariable(value = "id") int profileId) throws Exception{
		
		Profile profile = profileRepository.findById(profileId)
				.orElseThrow(() -> new Exception("Profile not found"));
		return ResponseEntity.ok().body(profile);
	}
	
	@PostMapping("/profile")
	public Profile createProfile(@RequestBody Profile profile ) {
		return profileRepository.save(profile);
	}
	
	@PutMapping("/profile/{id}")
	public ResponseEntity<Profile> updateProfile(@PathVariable(value = "id") int profileId, @RequestBody Profile profileDetails) throws Exception {
		Profile profile = profileRepository.findById(profileId).orElseThrow(() -> new Exception("Profile not found"));
		
		profile.setFirstName(profileDetails.getFirstName());
		profile.setLastName(profileDetails.getLastName());
		
		profile.setAddress(profileDetails.getAddress());
		profile.setCity(profileDetails.getCity());
		profile.setState(profileDetails.getState());
		profile.setCountry(profileDetails.getCountry());
		
		final Profile updatedProfile = profileRepository.save(profile);
		return ResponseEntity.ok(updatedProfile);
		
	}
}
