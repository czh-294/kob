package com.kob.backend.controller.user;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.kob.backend.mapper.UserMapper;
import com.kob.backend.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

public class UserController {

    @Autowired
    UserMapper userMapper;

    @GetMapping("/user/all/")
    public List<User> getAll(){
        return userMapper.selectList(null);
    }

    @GetMapping("/user/{userid}/")
    public User getuser(@PathVariable int userid){
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("id", userid);
        return userMapper.selectOne(queryWrapper);
    }

    @GetMapping("user/add/{userid}/{username}/{password}/")
    public String adduser(@PathVariable int userid,
                          @PathVariable String username,
                          @PathVariable String password){
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodePassword = passwordEncoder.encode(password);
        User user = new User( userid, username, encodePassword);
        userMapper.insert(user);
        return "success";

    }

    @GetMapping("user/delete/{userid}/")
    public String deleteuser(@PathVariable int userid){
        userMapper.deleteById(userid);
        return "success";
    }
}
