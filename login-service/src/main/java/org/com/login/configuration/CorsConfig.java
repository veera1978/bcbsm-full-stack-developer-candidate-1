package org.com.login.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;



@Configuration
@EnableWebMvc
public class CorsConfig implements WebMvcConfigurer{
    @Override
    public void addCorsMappings(CorsRegistry registry) {
		/*
		 * registry.addMapping("/**") .allowedOrigins("http://localhost:4200") //
		 * Replace with the URL of your Angular app .allowedMethods("GET", "POST",
		 * "PUT", "PATCH", "DELETE", "OPTIONS") .allowedHeaders("*")
		 * .allowCredentials(true);
		 */
    	registry.addMapping("/**").allowedOrigins("http://localhost:4200");
    }
    
     @Override
    public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
        // Configure content negotiation strategy here
        configurer.defaultContentType(MediaType.APPLICATION_JSON);
    }
    
 
    
}
