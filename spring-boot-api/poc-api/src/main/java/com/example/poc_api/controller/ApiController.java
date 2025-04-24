package com.example.poc_api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/api")
public class ApiController {

    @GetMapping("/status")
    public Map<String, String> getStatus() {
        Map<String, String> status = new HashMap<>();
        status.put("message", "Hola a todos!");
        return status;
    }

    @GetMapping("/hello")
    public Map<String, String> getHello() {
        Map<String, String> response = new HashMap<>();
        response.put("data", "Hola mundo desde Spring Boot API después del login");
        return response;
    }
}
