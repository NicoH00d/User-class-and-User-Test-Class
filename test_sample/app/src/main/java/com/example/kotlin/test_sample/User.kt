package com.example.kotlin.test_sample

data class User(var name: String, var age: Int){
    fun isAdult(): Boolean {
        return age > 18
    }
    fun isTeenager(): Boolean{
        return age in 15..18
    }
    fun isChild(): Boolean{
        return age < 13
    }
}