package hong.quan.DemoBackEnd.controllers;

import hong.quan.DemoBackEnd.models.User;
import hong.quan.DemoBackEnd.repositorys.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:5173")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @PostMapping("/user")
    public User newUser(@RequestBody User newUser){
        return  userRepository.save(newUser);
    }
    @GetMapping("/users")
    public List<User> getUsers( ){
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    public User getUser(@PathVariable Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
    }
}
