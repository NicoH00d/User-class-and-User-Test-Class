package com.example.kotlin.test_sample

import org.junit.Assert.assertTrue
import org.junit.Test

class UserTest {

    @Test
    fun testisAdult() {
        val user = User("Nico", 19)
        assertTrue(user.isAdult())
    }

    @Test
    fun testisTeen() {
        val user = User("Nico", 16)
        assertTrue(user.isTeenager())
    }
    @Test
    fun testisChild(){
        val user = User("Nico", 12)
        assertTrue(user.isChild())
    }

}