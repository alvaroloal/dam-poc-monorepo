package com.example.poc_api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.Arrays;
import java.time.Instant;

@RestController
@RequestMapping("/api")
public class ApiController {

    @GetMapping("/status")
    public Map<String, String> getStatus() {
        Map<String, String> status = new HashMap<>();
        status.put("message", "API is running!");
        return status;
    }

    @GetMapping("/hello")
    public Map<String, String> getHello() {
        Map<String, String> response = new HashMap<>();
        response.put("greeting", "¡Hola desde la API Spring Boot!");
        response.put("description", "Este es el mensaje devuelto por /api/hello.");
        return response;
    }

    @GetMapping("/info")
    public Map<String, Object> getAppInfo() {
        Map<String, Object> info = new HashMap<>();
        info.put("aplicacion", "API de Prueba Monorepo");
        info.put("version", "0.1.0");
        info.put("timestamp", Instant.now().toString());
        info.put("estado", "Operacional");
        List<String> modulos = Arrays.asList("Core", "API Status", "Info");
        info.put("modulosActivos", modulos);
        return info;
    }
}
